declare interface Fn<T = any, R = T> {
    (...arg: T[]): R
}

declare type Nullable<T> = T | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

declare type Recordable<T = any> = Record<string | number | symbol, T>

declare var MediaRecorder: any;

declare interface Pagination<T = any> {
    current: number
    query?: T
    size: number
}

declare interface ResponseData<T = any> {
    code: number
    data: T
    message: string
    success: boolean
}

declare type TimeoutHandle = ReturnType<typeof setTimeout>

declare type IntervalHandle = ReturnType<typeof setInterval>

declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number
