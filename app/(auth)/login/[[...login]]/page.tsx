import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center p-5 gp-10">
            {/* <image src="/assets/logo.svg" width={100} height={100} alt="Logo"></image> */}
            <div className="mt-3">
                <SignIn />
            </div>
        </main>
    )
}