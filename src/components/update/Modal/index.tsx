import { fetchWikipediaSummary } from '@/externalApis/Api';
import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';


const ModalTemplate: React.FC<React.PropsWithChildren<{
  title?: ReactNode;
  footer?: ReactNode;
  cancelText?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  width?: number;
}>> = ({
  title,
  children,
  footer,
  cancelText = 'Cancel',
  okText = 'OK',
  onCancel,
  onOk,
  width = 530,
}) => {
  
  const [Topic,setTopic] =useState("")
  const [TopicAns,setAskTopicAns] =useState("")
  const askTopic = async (topic :string)=>{
   // alert(topic)
   const ans = await fetchWikipediaSummary(topic)
   setAskTopicAns(ans)


  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div
        className={`bg-gray-900 text-white rounded-lg shadow-lg p-6 relative w-full max-w-lg`} // Black notepad style
        style={{ width }}
      >
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <div className="text-xl font-semibold">{title}</div>
          <button
            className=" bg-black text-gray-400 hover:text-gray-200"
            onClick={onCancel}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <textarea className="textarea   border-white"onChange={(e: any)=>{setTopic(e.target.value)}} placeholder="Type a Topic ..."  rows={2}></textarea>
        <button className="btn btn-active w-28" onClick={()=>{askTopic(Topic)}}>
            Ask Me  
          </button>
          <textarea className="textarea   border-white" value={TopicAns} placeholder="Answer ..." rows={10}></textarea>

        <div className="py-4">{children}</div>
        {typeof footer !== 'undefined' ? (
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded hover:bg-gray-700"
            >
              {cancelText}
            </button>
            <button
              onClick={onOk}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
            >
              {okText}
            </button>
          </div>
        ) : (
          footer
        )}
      </div>
    </div>
  );
};

const Modal = (
  props: Parameters<typeof ModalTemplate>[0] & { open: boolean | (() => void) }
) => {
  const { open, ...omit } = props;

  const isOpen = typeof open === 'function' ? open() : open; // Handle both cases

  return createPortal(
    isOpen ? <ModalTemplate {...omit} /> : null,
    document.body
  );
};

export default Modal;
