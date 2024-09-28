
    export interface LoginForm {
      email: string;
      password: string;
    }

    export interface Order{
      id: number;
      status:string;
      date:string;

    }
    
    export interface RegisterForm extends LoginForm {
      name: string;  
      address: string;
      phone: string;
      userId?: number;
      orders?: Order[];
    }
    
    export interface UserSession {
     login:boolean;
     user:RegisterForm;
     token:string;

    }
    
  

