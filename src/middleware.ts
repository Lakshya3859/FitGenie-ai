import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher(["/generate-program", "/profile"]); //protect this both files if the user is not authenticated

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    '/((?!_next|.*\\..*).*)',
    // Always run on API routes
    '/(api|trpc)(.*)',
  ],
};
