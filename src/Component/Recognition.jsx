import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function Recognition() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

  return (
    <>
        <div className='row d-flex justify-content-center align-item-center gap-2' >
            <h4 className='row d-flex justify-content-center align-item-center gap-2'>Microphone: {listening ? 'on' : 'off'}</h4>
            <div className='row d-flex justify-content-center gap-2'>
                <button className='btn btn-dark' onClick={SpeechRecognition.startListening}>Start</button>
                <button className='btn btn-dark' onClick={SpeechRecognition.stopListening}>Stop</button>
                <button className='btn btn-dark' onClick={resetTranscript}>Reset</button>
            </div>
            <p>{transcript}</p>
            </div>
    </>
  )
}
