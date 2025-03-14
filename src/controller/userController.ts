import { User } from "../entities/User.entity";
import { Request  ,  Response } from "express";
import dataSource from "../datasource/dataSource";
import { UserRepository } from "../repo/userRepository";




export const getUserByName = async (req: Request, res: Response) : Promise<any> => {
    try {
        const { firstName, lastName } = req.body;
        const userRepo = dataSource.getRepository(User).extend(UserRepository);
        
        const user = await userRepo.find();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};




export const getuser = async (req: Request, res: Response): Promise<any> => {
    try {
        const userRepo = dataSource.getRepository(User);
        const users = await userRepo.find({
           
        });
        

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json(users);


    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


export const adduser = async (req: Request, res: Response): Promise<any> => {
    const { firstName, lastName, isActive, id , profile } = req.body;

    try {
        const userRepo = dataSource.getRepository(User);
        
        const existingEmp = await userRepo.findOne({ where: { id } });
        if (!existingEmp) {
            
            const newEmp = userRepo.create(req.body);
            await userRepo.save(newEmp);

            return res.status(201).json({ message: "Employee ID added successfully" });
        }

        return res.status(200).json({ message: "Employee already exists" });

    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ error: "Internal server error" });  // Use 500 instead of 200
    }
};


export const updateuser = async (req : Request , res :Response) : Promise<any> => {

   try{
    const {id} = req.params;
    const {firstName , lastName , isActive , profile} = req.body;

    const userRepo = dataSource.getRepository(User);
    const existingEmp = await userRepo.findOne({ where: { id: Number(id) } });

    if(!existingEmp){
        return res.status(400).json({
            success:true,
            message:"user not found"
        })
    }

        if(!id){
            return res.status(404).json({
                success:true,
                message: "please provide ID"
            })
        }

        if(!lastName || !firstName){
            return res.status(404).json({
                success:true,
                message:"please provide email and password"
            })
        }

      if(lastName){
         existingEmp.lastName = lastName
      }
      if(firstName){
        existingEmp.firstName = firstName
      }
      if(isActive){
        existingEmp.isActive = isActive
      }


      await userRepo.save(existingEmp);


      return res.status(200).json({
        success:true,
        message : "user updated successfully"
      })


    }catch(err){
        console.log("Internal Server Error" , err)
        return res.status(400).json({
            success: true,
            message: "Internal Server Error"
        })
    }
        
}


export const deleteUser = async(req : Request , res: Response) : Promise<any> => {

    const{id} = req.params;
    try{

        const userRepo = dataSource.getRepository(User);
        const findUser = await userRepo.find({where : {id : Number(id)}})

        await userRepo.remove(findUser);

        return res.status(200).json({
            success:true,
            message : "User Deleted Successfully"
        })

    }
    catch(err){
        console.log("Internal Server error")
        return res.status(404).json({
            success:true,
            message : "Internal Server Error"
        })
    }
}


