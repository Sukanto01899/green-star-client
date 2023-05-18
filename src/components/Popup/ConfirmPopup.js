import React from 'react';

const ConfirmPopup = ({confirmFunc, popupCloseFunc}) => {
    return (
        <div class="rounded-lg bg-white p-8 shadow-2xl">
  <h2 class="text-lg font-bold">Are you sure you want to do that?</h2>

  <p class="mt-2 text-sm text-gray-500">
    Doing that could have cause some issues elsewhere, are you 100% sure it's
    OK?
  </p>

  <div class="mt-4 flex gap-2">
    <button
    onClick={confirmFunc}
      type="button"
      class="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
    >
      Yes, I'm sure
    </button>

    <button
    onClick={()=>popupCloseFunc(false)}
      type="button"
      class="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
    >
      No, go back
    </button>
  </div>
</div>
    );
};

export default ConfirmPopup;