export const errorHandler = (satusCode,message)=>{
    const error = new Error()
    error.statusCode = satusCode;
    error.message = message;
    return error;
};