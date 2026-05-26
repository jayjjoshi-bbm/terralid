"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";

export function AppSidebar() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Sidebar className="top-[10vh]">
      <SidebarHeader className="border-b p-4">
        <h2 className="text-md font-semibold">
          Database & Filters
        </h2>
      </SidebarHeader>

      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>
            Database
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm">
                Ores & Minerals
                <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  Option 1
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Option 2
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Option 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroupContent>

        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Data Type
          </SidebarGroupLabel>

          <SidebarGroupContent className="space-y-4">
            
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Subset By
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm">
                Choose Type
                <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  Country
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Mining Area
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Mining Site
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Countries
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm">
                Choose Countries
                <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  A
                </DropdownMenuItem>

                <DropdownMenuItem>
                  B
                </DropdownMenuItem>

                <DropdownMenuItem>
                  C
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Targeted Metals
          </SidebarGroupLabel>

          <SidebarGroupContent className="space-y-4">
            
          </SidebarGroupContent>
        </SidebarGroup>

         <SidebarGroup>
          <SidebarGroupLabel>
            Publication Year
          </SidebarGroupLabel>

          <SidebarGroupContent className="space-y-4">
            
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>

          <SidebarMenuButton>
            Apply
          </SidebarMenuButton>

        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}