import React from 'react';
import { IoCreateOutline } from "react-icons/io5";

const AddMediaCardDialog = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }

    return (
        <>
            <button className="btn btn-success" onClick={openModal}>
                <IoCreateOutline></IoCreateOutline> New Card
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className="font-bold text-xl">Create a new Media Card</h1>
                    <hr />
                    <form action="" className='mt-4 flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Enter the title:</label>
                            <input type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label>Select a category:</label>
                            <select name="cars" id="cars">
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                                <option value="anime">Anime</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Rating:</label>
                            <input type="" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Review:</label>
                            <input type="" style={({height: '200px', borderRadius: '4px'})}/>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default AddMediaCardDialog;