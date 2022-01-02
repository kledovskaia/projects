import { StatusCodes } from 'http-status-codes'

export class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

export class UnAuthorizedError extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED)
  }
}

export class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST)
  }
}
