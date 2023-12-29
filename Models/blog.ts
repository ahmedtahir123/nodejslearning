export class Blog {
    private _id: string;
  
    private _title: string;
    
    private _content: string;
    
    private _username: string;
  
    private _views: number;
    

    constructor(id: string, title: string, content: string, username: string, views: number){
        this._content = content;
        this._id = id;
        this._title = title;
        this._username = username;
        this._views = views; 
    }


    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get views(): number {
        return this._views;
    }
    public set views(value: number) {
        this._views = value;
    }
}