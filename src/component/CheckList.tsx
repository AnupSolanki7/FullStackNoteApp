import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getCheckList } from '../redux/services'

const CheckList = () => {
  const [checkList, setCheckList] = useState([])

  useEffect(() => {
    getCheckListData()
  }, [])
  

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
                    console.log(ele);
                    
                    return(
                      <li style={{ textDecorationLine: ele.isDone ? "line-through" : "none" }} >
                        <input className='check-box' type="checkbox" checked={ele.isDone} />
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