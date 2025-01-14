class ApiError extends Error{
    constructor(
        statusCode,
        message="some thing went wrong ",
        Error=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors

        if(stack){
            this.stack=statck
        }else{
            Error.captureStatckTrace(this,this.constructor)
        }
    }
}

export{ApiError}