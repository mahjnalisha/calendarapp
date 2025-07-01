'use client'; // marks this file as the client component
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";



export default function LandingPage() {
    return (
        < main className="flex flex-col p-10 gap-10" >
            <section className="flex flex-col items-center">
                <h1 className="text-center ft-20">Calendar App</h1>

            </section>
            <div className="flex flex-col mt-3 text-center items-center">
                <SignIn
                    routing="hash"
                    appearance={{
                        baseTheme: dark,
                    }}
                />
            </div>
        </main >
    )
}