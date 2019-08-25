import {User} from './user';
import {Project} from './Project';

export class Task{
    public TaskId?:number;
    public Parent_Id?:number;
    public Project_Id?:number;
    public Task?: string;
    public StartDate?: Date;
    public EndDate?: Date;
    public Priority?:number;
    public Userid?: number;
    public Status?:string;
    public ProjectName?: string;
    public ParentTaskName?: string;
    public TaskUserName?: string;
    public ProjectDTOName?: string;
    public ParentDTOName?: string;

    public User?:User[] ;
    public Parent?: ParentTask[] ;
    public Project?:Project[] ;
    
    public IsParentTask?: boolean;
    public IsTaskEnded?: boolean;

    public IsCreate?: boolean= false;
}
export class ParentTask{
    public Parent_Id?:number;
    public Parent_Task?:string;
}
export class SearchTask
{
    public Task?:string;
    public ParentTask?:string;
    public PriorityFrom?:number;    
    public StartDate?: Date;
    public EndDate?: Date;
    public PriorityTo?:number;
    }