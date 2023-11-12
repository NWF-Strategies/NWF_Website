import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <div className="">
        <form action="mailto::kvtran3546@gmail.com">
            <div className="">
                <div className="">
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="">
                    <input type="email" placeholder="Email"/>
                </div>
            </div>
            <div className="">
                <textarea placeholder="Message"></textarea>
            </div>
            <div className="">
                <button type="submit">Send</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter