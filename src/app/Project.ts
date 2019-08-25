import {User} from './user';

export class Project{
    public Project_ID:number;
    public ProjectName: string;
    public StartDate?: Date;
    public EndDate?: Date;
    public Priority:number;
    public Userid?: number;
    public ManagerName : string;
    public TotalTaskCount:number;
    public lstUser:User[] ;
    public CompletedTaskCount:number;
    public IsCreate?: boolean= false;
}