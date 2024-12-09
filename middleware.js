import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
    console.log(request);
    
  const token = await getToken({ req: request, secret:process.env.NEXTAUTH_SECRET});
  const url = request.nextUrl.pathname;
  console.log("Working");
  console.log(token);
  
  console.log(url);
  console.log("Working");
  


  if (!token && (url.startsWith("/past-orders")||url.startsWith("/cart") || url.startsWith("/confirmation"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/signup", "/login", "/", "/past-orders","/confirmation","/cart"],
};
