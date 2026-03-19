class AppError extends Error{

    constructor(){
        super()
    }

    create(massage,statusCode,Statustext){
        this.massage=massage;
        this.statusCode=statusCode;
        this.Statustext=Statustext;

        return this;
    }
};

module.exports=new AppError();

