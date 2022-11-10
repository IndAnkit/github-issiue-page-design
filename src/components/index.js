
import { forwardRef } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiRecordCircleLine } from 'react-icons/ri'
import { MdArrowDropDown, MdOutlineMoreHoriz } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

import { getDifference } from '../utility';

export const StatusLabel = ({ name, color, description }) => {
  return <div data-title={description || ''} className='inline-block rounded-full px-2 m-1' style={{ backgroundColor: `#${color}` }}>{name}</div>
}

const MenuItem = ({ title, className }) => {
  return <div className={`flex flex-row gap-1 items-center text-gray-500`}>
    <div>{title}</div>
    <MdArrowDropDown />
  </div>
}
export const IssueHeaderCard = ({ item }) => {
  return <div className='flex flex-col md:flex-row md:px-4 md:py-2 gap-1 border-t border-t-slate-300 md:bg-gray-200'>
    <div className='flex flex-1 flex-row gap-2 bg-white md:bg-transparent '>
      <div className='m-2 flex flex-row gap-1 items-center'>
        <RiRecordCircleLine />
        <div className='text-lg font-semibold'>820 Open</div>
      </div>
      <div className='flex flex-row gap-1 items-center text-gray-500'>
        <TiTick />
        <div className='text-lg font-semibold '>320 closed</div>
      </div>
    </div>
    <div className='px-1 py-1 items-center flex flex-row gap-2 justify-between bg-gray-200 md:justify-start'>
      <MenuItem title={"Author"} />
      <MenuItem title={"Label"} />
      <MenuItem title={"Project"} />
      <MenuItem title={"Milestone"} />
      <div className='hidden flex-row gap-2 justify-between md:flex'>
        <MenuItem title={"Assignee"} />
        <MenuItem title={"Sort"} />
      </div>
      <div className='md:hidden'>
        <MdOutlineMoreHoriz />
      </div>
    </div>
  </div>
}

export const IssueCard = forwardRef(({ item }, ref) => {

  const {

    number,
    title,
    labels = [],
    user: {
      login } = {},
    state
    , comments
    , created_at


  } = item || {}
  return <div ref={ref} className='flex flex-row px-4 py-2 border-t border-t-slate-300'>
    <div className='flex flex-1 flex-row gap-2 '>
      <div className='my-2'>
        <RiRecordCircleLine className='text-green-500' />
      </div>
      <div id='title-container' className=''>
        <div className=''>
          <span className='text-lg font-semibold'>{title}</span>
          {labels.map(label => {
            return <StatusLabel key={label.id} {...label} />
          })}
        </div>
        <div className='flex flex-row gap-2 text-gray-500 text-sm'>
          <div>#{number}</div>
          <div>{state} {getDifference(created_at)} by</div>
          <div> {login}</div>
        </div>
      </div>
    </div>
    {comments > 0 && <div className='hidden md:flex gap-1 items-center justify-center cursor-pointer text-sm'><FaRegCommentAlt className='hover:text-blue-400 mt-1' /> {comments}</div>}
  </div>
})



