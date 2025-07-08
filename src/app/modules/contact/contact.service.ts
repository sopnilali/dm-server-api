import prisma from "../../utils/prisma";
import { IContact } from "./contact.interface";

const createContact = async (payload: IContact) => {
    const result = await prisma.contact.create({
        data: payload
    })
    return result
}

const getAllContact = async () => {
    const result = await prisma.contact.findMany()
    return result
}

const deleteContact = async (id: string) => {
    const result = await prisma.contact.delete({
        where: { id }
    })
    return result
}





export const ContactService = {
    createContact,
    getAllContact,
    deleteContact
}