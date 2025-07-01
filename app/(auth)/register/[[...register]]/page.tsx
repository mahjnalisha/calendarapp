import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {
    return (
        <main className="flex flex-col items-center p-5 gp-10">
            <Image src="/assets/logo.svg" width={100} height={100} alt="Logo" />
            <div className="mt-3">
                <SignUp />
            </div>
        </main>
    )
}