import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../db'


export const authOptions = {
    // adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID ?? '',
            clientSecret: process.env.CLIENT_SECRET ?? '',
        }),
        
    ],

    callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        try {
            if(!user || !user.email){
                return false
            }

            const existedUser = await prisma.user.findUnique({
                where: {
                    email: user.email
                }
            })

            if(!existedUser){
                await prisma.user.create({
                    data: {
                        email: user.email,
                        name: user.name,
                        image: user.image
                    }
                })

                
            }

            return true;
 
            
        } catch (error) {
            console.log(error)
            return false
            
        }
      return true
    },
   
    async session({ session, user, token }) {
    

        const userSession= await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        })
        if(!userSession){
            return false
        }

        // want to store user id in session

        session.user.id = userSession.id

       // console.log(user)
        //console.log('session', session)


      return session
    },
   

},
    secret: process.env.NEXTAUTH_SECRET,
    
}