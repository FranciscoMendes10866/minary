// eslint-disable-next-line no-unused-vars
declare namespace Express {
    export interface Request {
        authId: number
        authUsername: string
        authEmail: string
    }
}
