export interface IMessage {
    value: string
    type: string
    date: Date
    name: string
}

export interface IUser {
    id: string
    name: string
}

export enum SocketActionsEnum {
    'joinRoom' = 'joinRoom',
    'sendMessage' = 'sendMessage',
}