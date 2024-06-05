"use client"

import { CompanyData, companyData, Campaign } from "@/utils/customer-data"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IconContext } from "react-icons";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactView from "@/components/ContactView";
import CreateCampaign from "@/components/CreateCampaign"


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, cellClassName: 'super-app-theme--cell' },
  { field: 'company', headerName: 'Company', flex: 1, cellClassName: 'super-app-theme--cell', },
  { field: 'employees', headerName: '# Employees', flex: 1, cellClassName: 'super-app-theme--cell', },
  { field: 'revenue', headerName: 'Revenue', flex: 1, cellClassName: 'super-app-theme--cell', },
  { field: 'tier', headerName: 'Tier', flex: 1, cellClassName: 'super-app-theme--cell',},
];
let rows:CompanyData[] = companyData

export default function CRM() {
  const [selectedRows, setSelectedRows] = useState<CompanyData[]>();
  const [contactView, setContactView] = useState<boolean>(false);
  const [createCampaign, setCreateCampaign] = useState<boolean>(false);
  const [campaignList, setCampaignList] = useState<Campaign[]>([])
  const [selectedCampaignName, setSelectedCampaignName] = useState<Campaign["campaignName"]>("")
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)
  const [showMobileWarning, setShowMobileWarning] = useState<boolean>(false)
  const [showInfo, setShowInfo] = useState<boolean>(false)

  useEffect(() => {
    if(window.innerWidth <= 767)
      setShowMobileWarning(true)
  }, [])

  function handleInfoToggle():void {
    setShowInfo(!showInfo)
  }
   
  function handleViewContact():void {
    setContactView(!contactView)
  }

  function handleCampaignCreate():void {
    setCreateCampaign(!createCampaign)
  }

  function handleListChoice(event:any):void {
    setSelectedCampaignName(event.target.value)
    campaignList.forEach((campaign:Campaign):void => {
      if(campaign.campaignName === event.target.value) {
        rows = campaign.campaignList
        setSelectedCampaign(campaign)
      }
      else if (event.target.value === "All Records") {
        setSelectedCampaignName("All Records")
        rows = companyData
      }
    })
  }

  return(
    <main className="flex flex-col gap-8 align-center justify-start min-h-lvh block bg-white">
      <nav className="w-full p-4 top-0 bg-white shadow-xl flex justify-between">
        <div className="flex flex-row gap-12 justify-center items-center">
          <p className="font-bold text-slate-500 text-xl uppercase">CRM Example</p>
          <div onClick={handleInfoToggle}>
            <svg className="w-8 h-8 cursor-pointer" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
            </svg>
          </div>
        </div>
        
        <div>
            <IconContext.Provider value={{size:"2rem"}}>
              <Link href={"/"}>
                <IoHomeOutline className="hover:text-blue-500 transition-all"/>
              </Link> 
            </IconContext.Provider>
        </div>
      </nav>
      {showMobileWarning ? 
      <section className="flex flex-col justify-center p-24 items-center h-full absolute">
        <svg className="w-24 h-24" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"></path>
        </svg>
        <p className="font-bold text-xl text-center">This CRM example is designed for desktop.</p>

      </section>
      :
      <>
      <section className="h-[70vh] w-auto px-12 ">
      <div className="flex gap-4 my-4">
          <button 
            className={`${
              selectedRows?.length === 1
                ? 'bg-blue-500 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
            } text-white font-bold py-2 px-4 rounded`}
            disabled={selectedRows?.length !== 1 }
            onClick={handleViewContact}>
              {!contactView ? 'View Contact' : 'Hide Contact'}
          </button>
          <button 
            className={`${
              selectedRows ? selectedRows?.length >= 2
                ? 'bg-blue-500 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-300 cursor-not-allowed'
            } text-white font-bold py-2 px-4 rounded`}
              disabled={!selectedRows ||  selectedRows?.length < 2 }
              onClick={handleCampaignCreate}>
                Create Campaign List
          </button>
          {campaignList.length ? 
            <select onChange={handleListChoice} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500">
                <option value={"All Records"}>All Records</option>
              {campaignList.map((campaign:Campaign) => (
                <option className="py-2 px-4" key={campaign.campaignName} value={campaign.campaignName}>
                  {campaign.campaignName}
                </option>
        ))}
            </select>
          :
          null
          }
        </div>
        {selectedCampaignName.length ? selectedCampaignName !== "All Records" ? 
        <section className="flex w-full my-4 border-y-2 border-y-solid border-y-gray-300 py-4 items-center gap-8">
          <h2 className="font-bold text-xl">{selectedCampaignName}</h2>
          <p className="text-sm text-gray-500">{selectedCampaign?.campaignDesc}</p>
        </section>
        :
        null:
        null
        }
        
        <DataGrid
          sx={{
            boxShadow: 2,
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            '& .super-app-theme--cell': {
              background: 'rgb(255,255,255)'
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight:600,
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: '#ffffff',
              borderTop: 'solid 2px rgb(59 130 246)'
            },
            '& .MuiDataGrid-row': {
              background:'rgb(255,255,255)',
            },
            '& .MuiDataGrid-selectedRowCount': {
              color: 'rgb(59,130,246)',
              fontWeight:600
            },
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize:100 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          checkboxSelection
          onRowSelectionModelChange={(ids):void => {
            const selectedIDs = new Set(ids);
            const checkedRows:CompanyData[] = companyData.filter((row) =>
              selectedIDs.has(row.id)
            );
            setSelectedRows(checkedRows);
          }}
        />
    </section>

    {/* View Contact Slide Out */}

    <div onClick={handleViewContact} className={`${!contactView ? 'invisible opacity-0': 'opacity-50'} w-full h-full bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer`}>
    </div>
    <section className={`${!contactView ? 'translate-x-full': 'translate-x-0'} w-[60vw] h-full bg-white right-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex justify-center items-center z-20 shadow-lg items-center`}>
      {selectedRows ? 
      <ContactView contacts={selectedRows} />
      :
      null
      }
    </section>
    <div onClick={handleViewContact} className={`${!contactView ? 'invisible opacity-0': 'opacity-50'} absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5 z-40`}>
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
    
    {/* Create New Campaign List Slide Out */}

    <div onClick={handleCampaignCreate} className={`${!createCampaign ? 'invisible opacity-0': 'opacity-50'} w-full h-full bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer`}>
    </div>
    <section className={`${!createCampaign ? 'translate-x-full invisible': 'translate-x-0'} w-[60vw] h-full bg-white right-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex justify-center items-center z-20 shadow-lg`}>
      {selectedRows ?  
      <CreateCampaign contacts={selectedRows} campaignList={campaignList} setCampaignList={setCampaignList} setCreateCampaign={setCreateCampaign} />
      :
      null
      }
    </section>
    <div onClick={handleCampaignCreate} className={`${!createCampaign ? 'invisible opacity-0': 'opacity-50'} absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5 z-40`}>
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>

    {/* Page Info Modal */}

    <div onClick={handleInfoToggle} className={`${!showInfo ? 'invisible opacity-0': 'opacity-50'} w-full h-full bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer`}>
    </div>
    <section onClick={handleInfoToggle} className={`${!showInfo ? 'invisible opacity-0': 'opacity-100'} bg-white duration-500 ease-out transition-all p-8 flex flex-col justify-center z-20 shadow-lg gap-8 absolute w-full h-full border-box cursor-pointer`}>
      <div className="lg:p-96 sm:p-48">
        <h2 className="font-bold text-3xl text-left mb-4">About the CRM example</h2>
        <p className="text-slate-500 text-left mb-4">This is a front-end only example so every time you refresh the page, any changes will be reset.</p>
        <p className="text-slate-500 text-left mb-4">You can filter the table using the tools in the table header. By selecting a single row, you are able to view the record in greater detail. By selecting more than one row, you can create a filtered list.</p>
      </div>
      <div onClick={handleInfoToggle} className={`${!showInfo ? 'invisible opacity-0': 'opacity-50'} absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5 z-40`}>
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      
    </section>


    </>
  }

  </main>
  )
}