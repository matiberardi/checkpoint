import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="pl-10 pb-2">
        <div>
          <Link to="/" className='font-bold text-3xl mr-10'>
            Checkpoint
          </Link>
          <SignedIn>
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in" className='font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md'>
              Sign In
            </Link>
          </SignedOut>
        </div>
      </header>
      <main className='pl-10'>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}
