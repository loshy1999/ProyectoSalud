import type { ReactNode } from "react"

import { PatientNav } from "@/components/patient-nav"  // Menú lateral específico de pacientes
import { PatientHeader } from "@/components/patient-header" // Header específico de pacientes
import { SidebarProvider, Sidebar, SidebarContent } from "@/components/ui/sidebar"

interface PatientLayoutProps {
  children: ReactNode
}

export default function PatientLayout({ children }: PatientLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col w-full">
        <PatientHeader />
        <div className="flex flex-1">
          <Sidebar>
            <SidebarContent>
              <PatientNav />
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
