export const DataResponse = (isError: boolean, message: string, data?: any) => {
   return {
      error: isError,
      message,
      data
   }
}

export class MessageResponse {
   static ERROR_OCCURRED = 'An error occurred';
   static APPROVE_ACCOUNT_SUCCESS = 'Add account succesfully.';
   static NOT_ADMIN = 'Please login with admin acount.';
   static NOT_THIRDPATTY = 'Please login with Third Party account.';
   static SUCCESS = 'Success.';
   static MISSING_INPUT = 'Missing input.';
   static ACCOUNT_EXISTS = 'Account has been exists.';
   static VERIFY_OTP = 'Please verify OTP has been sent via your email.';
   static ACCOUNT_NO_EXISTS = 'Account not exists.';
   static REGISTER_SUCCESS = 'Registry successfully.';
   static WRONG_OTP = 'OTP code is not authentic.';
   static WRONG_PASSWORD = 'Wrong password.';
   static LOGIN_SUCCESS = 'Login successfully.';
   static REVIEWED_ACCOUNT = 'Account is being reviewed, please wait.';
   static NO_TOKEN = 'No token provided.';
   static UNAUTHORIZED = 'Unauthorized access.'
}
