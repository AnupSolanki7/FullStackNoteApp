import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refresh } from '../redux/checkList'
import { getCheckList, isListChecked } from '../redux/services'

const CheckList = () => {
  const [checkList, setCheckList] = useState([])
  const refreshList = useSelector((state:any) => state.CheckList)
 const dispatch = useDispatch()

  useEffect(() => {
    getCheckListData()
  }, [refreshList])
  


  const getCheckListData = async () => {
    const result = await getCheckList().then((res) => {
        setCheckList(res.data)
    })
    
  }


  return (
    <div className="note-div">
      {
        checkList.map((e:any) => {
          return(
            <div className='note-card'>
            <h4>{e.title}</h4>
              <ul>
                {
                  e.CheckedData.map((ele:any) => {  
                    return(
                      <li style={{ textDecorationLine: ele.isDone ? "line-through" : "none" }} >
                        <input onChange={() => {isListChecked(ele.id, {isDone: !ele.isDone}); dispatch(refresh())} } className='check-box' type="checkbox" checked={ele.isDone} />
                        {ele.description}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default CheckList