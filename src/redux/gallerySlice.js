import { createSlice } from '@reduxjs/toolkit';
import paintingsData from '../components/paintingsData'


const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        paintingsData: paintingsData,
        addedPainting: [],
        alreadyAdded: false,
        clientAllData: [],
        fanAllData: []
    },
    reducers: {
        addPainting: (state, action) => {
            //console.log("action", action.payload)
            const title = action.payload.title;
            if (
                state.addedPainting
                    .map((item) => item.title)
                    .includes(title)
            ) {
                state.alreadyAdded = true;
                //state.addedPainting = state.addedPainting;

            } else {
                let newPaintCart =
                {
                    id: action.payload.id,
                    title,
                    tech: action.payload.tech,
                    price: action.payload.price,
                    img: action.payload.img
                };
                let existingtItems = state.paintingsData.map(paint => {
                    if (paint.title === title) {
                        paint.reserved = true;
                    }
                    //console.log("Reserved", paint.reserved)
                    return paint;
                });
                state.paintingsData = existingtItems;
                state.addedPainting.push(newPaintCart);

            }
        },
        removePainting: (state, action) => {
            const title = action.payload;
            //console.log("title to remove", title);
            state.addedPainting = state.addedPainting.filter(paint => paint.title !== title);
            if (
                state.paintingsData
                    .map((item) => item.title)
                    .includes(title)
            ) {
                let existingtItems = state.paintingsData.map(paint => {
                    if (paint.title === title) {
                        paint.reserved = false;
                    }
                    console.log("Reserved", paint.reserved)
                    return paint;
                });
                state.paintingsData = existingtItems;

            }
        },
        clientData: (state, action) => {
            //console.log("client", action.payload)
            state.clientAllData = action.payload;
        },
        switchFalse: (state) => {
            state.alreadyAdded = false;
        },
        fansData: (state, action) => {
            console.log("fan", action.payload)
            state.fanAllData = action.payload;
        },
        resetAddedPainting: (state) => {
            state.addedPainting = [];
        }
    }
});


export const { addPainting, feedback, removePainting, clientData, switchFalse, fansData, resetAddedPainting } = gallerySlice.actions;

export default gallerySlice.reducer;