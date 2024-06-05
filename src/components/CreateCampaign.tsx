import { CompanyData, Campaign } from '@/utils/customer-data';
import { ClickAwayListener } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

interface CampaignViewProps {
  contacts: CompanyData[];
  campaignList: Campaign[];
  setCampaignList: React.Dispatch<React.SetStateAction<Campaign[]>>;
  setCreateCampaign: React.Dispatch<React.SetStateAction<boolean>>;
}


const CreateCampaign: React.FC<CampaignViewProps> = ({ contacts, campaignList, setCampaignList, setCreateCampaign }) => {
  const [listName, setListName] = useState<string>("")
  const [listDesc, setListDesc] = useState<string>("")

  function handleListNameChange(event:any):void {
    setListName(event.target.value)
  }

  function handleListDescChange(event:any):void {
    setListDesc(event.target.value)
  }

  function handleCreateCampaign(event:any):void {
    event?.preventDefault()
    const newCampaign: Campaign = {
      campaignName: listName,
      campaignDesc: listDesc,
      campaignList: contacts,
    };
    setCampaignList(prevCampaignList => [...prevCampaignList, newCampaign]);
    setCreateCampaign(false)
    setListName("")
    setListDesc("")
  }

  return(
    <section className='flex flex-col gap-4'>
      <h2 className='font-bold text-4xl'>Create your campaign list</h2>
      <form onSubmit={handleCreateCampaign}>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-sm text-gray-500' htmlFor="campaign-name">Campaign List Name</label>
          <input className='border-solid border-2 border-gray-300 rounded p-4' type="text" placeholder='Campaign list name' id="campaign-name" onChange={handleListNameChange} value={listName} />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-sm text-gray-500' htmlFor="campaign-desc">List Description</label>
          <textarea className='border-solid border-2 border-gray-300 rounded p-4' rows={5} id="campaign-desc" placeholder='List description' value={listDesc} onChange={handleListDescChange}/>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500'>Create</button>
      </form>

    </section>
  )
}

export default CreateCampaign