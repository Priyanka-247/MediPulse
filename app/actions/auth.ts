"use server"

import { redirect } from "next/navigation"

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Simulate authentication delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Basic validation
  if (!email || !password) {
    return {
      error: "Email and password are required",
    }
  }

  // Simulate authentication logic
  if (email === "admin@medipulse.com" && password === "password") {
    // In a real app, you would set the session/cookie here
    redirect("/")
  }

  return {
    error: "Invalid credentials. Try admin@medipulse.com / password",
  }
}

export async function signupAction(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string
  const role = formData.get("role") as string

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Basic validation
  if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
    return {
      error: "All fields are required",
    }
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    }
  }

  if (password.length < 6) {
    return {
      error: "Password must be at least 6 characters long",
    }
  }

  // Simulate successful registration
  return {
    success: true,
    message: "Account created successfully! Please login to continue.",
  }
}
