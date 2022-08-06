import { Response } from "express";

export class customResponses {
  static successResponse(
    data: any,
    response: Response<any, Record<string, any>>
  ): Response<any, Record<string, any>> {
    return response.status(200).json({
      status: "success",
      data,
    });
  }

  static badRequestReponse(
    message: string,
    response: Response<any, Record<string, any>>
  ): Response<any, Record<string, any>> {
    return response.status(400).json({
      status: "fail",
      message,
    });
  }
}
