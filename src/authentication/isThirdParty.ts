import { NextFunction, Response } from "express";
import { DataResponse, MessageResponse } from "../HttpResponse/DataResponse";
import HttpStatusCode from "../HttpResponse/HttpStatusCode";
import { roles } from "../utils/data";

export default function isThirdParty(req: any, res: Response, next: NextFunction) {
   const { role } = req.user;
   if (role !== roles[roles.thirdparty]) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(DataResponse(true, MessageResponse.NOT_THIRDPATTY));
   }
   next();
}