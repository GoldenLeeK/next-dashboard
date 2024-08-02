"use client"

import LeftSidebar from '@/app/ui/template/left-sidebar'
import RightSidebar from '@/app/ui/template/right-sidebar'
import CenterExcel from '@/app/ui/template/center-excel'

export default function Page(){
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-200 p-4">
        <LeftSidebar />
      </div>
      <div className="flex-1 bg-white p-4">
        <CenterExcel />
      </div>
      <div className="w-64 bg-gray-200 p-4">
        <RightSidebar />
      </div>
    </div>
  );
}


