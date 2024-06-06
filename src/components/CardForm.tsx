"use client";
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function CardWithForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Card className="mx-auto mt-10 h-[400px] w-[480px] gap-4">
      <CardHeader className="mt-8 gap-2 text-center">
        <CardTitle className="">Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="your password"
                type={showPassword ? "password" : "text"}
              />
              <div
                className="relative bottom-9 left-[400px] flex w-[20px] justify-end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Login</Button>
        <Link href="/register" key="register" className="text-[14px]">
          Dont have Account? <b>register</b>
        </Link>
      </CardFooter>
    </Card>
  );
}
