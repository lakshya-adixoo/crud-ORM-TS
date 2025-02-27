import { User } from "../entities/User.entity";
import { Request  ,  Response } from "express";
import dataSource from "../datasource/dataSource";

export const getuser = async (req: Request, res: Response): Promise<any> => {
    try {
        const userRepo = dataSource.getRepository(User);
        const users = await userRepo.find({
            select : ["firstName" , "isActive"]
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
    const { firstName, lastName, isActive, id } = req.body;

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