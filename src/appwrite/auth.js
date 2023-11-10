import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


//
console.log("url:",conf.appwriteUrl); //uth.js?t=1699192296604:6 url: undefined
export class AuthService{

    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try{
          const userAccount=  await this.account.create(ID.unique(),email,password,name);
          userAccount? this.login({email,password}):userAccount;

        }
        

        catch(error){
            throw error;
        }
    }

    async login({email,password}){

        try{
            return await this.account.createEmailSession(email,password)
        }

        catch(error){
            throw error;
        }
            
    }

    async getCurrentUser(){
        try{
        return await this.account.get();
        }
        catch(error){
            throw error;
        }
        return null;
    }
    async logout()
    {

        try{
            return await this.account.deleteSessions();
            }
            catch(error){
                throw error;
            }

    }
}
const authService=new AuthService();
export default authService;