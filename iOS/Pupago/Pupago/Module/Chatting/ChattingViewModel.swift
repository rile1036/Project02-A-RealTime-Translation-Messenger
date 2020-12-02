//
//  ChattingViewModel.swift
//  Pupago
//
//  Created by 김근수 on 2020/11/25.
//

import Foundation
import RxSwift
import RxCocoa
import RxDataSources

class ChattingViewModel: ViewModel, ViewModelType {
    
    typealias RoomInfo = (title: String?, code: String?)
    
    struct Input {
        let chatText: Observable<String>
        let registTrigger: Observable<Void>
        let willLeave: Observable<Void>
    }
    
    struct Output {
        let viewText: Driver<Localize.ChatroomViewText>
        let roomInfo: Driver<RoomInfo>
        let items: Driver<[MessageSection]>
    }
    
    let chats = BehaviorRelay<[MessageSection]>(value: [MessageSection(header: "Chat", items: [])])
    let roomInfo = BehaviorRelay<RoomInfo>(value: (nil, nil))
    
    func transform(_ input: Input) -> Output {
        
        let socketManager = SocketIOManager.shared
        
        socketManager.socket.rx.event(.receiveMessage)
            .subscribe(onNext: { [unowned self] data in
                if let msg = self.parse(data.items) {
                    updateMessage(message: msg)
                }
            })
            .disposed(by: rx.disposeBag)

        input.registTrigger
            .withLatestFrom(input.chatText)
            .subscribe(onNext: { msg in
                socketManager.sendMessage(korean: msg, english: msg, origin: "Korean")
            })
            .disposed(by: rx.disposeBag)
        
        input.willLeave
            .subscribe(onNext: {
                socketManager.leavChatroom()
            })
            .disposed(by: rx.disposeBag)
        
        let viewText = localize.asDriver()
            .map { $0.chatroomViewText }
        
        let info = roomInfo.asDriver(onErrorJustReturn: (nil, nil))
        
        let chatItem = chats.asDriver(onErrorJustReturn: [])
        
        return Output(viewText: viewText,
                      roomInfo: info,
                      items: chatItem)
    }
    
    private func updateMessage(message: Message) {
        guard var section = chats.value.first else { return }
        section.items.append(message)
        chats.accept([section])
    }
    
    private func parse(_ data: [Any]?) -> Message? {
        guard
            let dataString = data?[0] as? String,
            let data = dataString.data(using: .utf8),
            let message = try? JSONDecoder().decode(Message.self, from: data)
        else { return nil }

        return message
    }
    
}
