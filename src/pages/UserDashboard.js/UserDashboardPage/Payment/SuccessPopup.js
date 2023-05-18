import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPopup = ({transactionID}) => {
    return (
        <section class="rounded-3xl shadow-2xl bg-white">
  <div class="p-8 text-center sm:p-12">
    <p class="text-sm font-semibold uppercase tracking-widest text-universal">
      Your payment is completed
    </p>

    <h2 class="mt-6 text-3xl font-bold">
      Thanks for your payment, we're getting it ready!
    </h2>
    <p class="text-sm font-semibold uppercase tracking-widest text-black mt-3">
      Your Transaction ID: <span>{transactionID}</span>
    </p>

    <Link
      class="mt-8 inline-block w-full rounded-full bg-universal py-4 text-sm font-bold text-white shadow-xl"
      to="/dashboard/my-order"
    >
      Done
    </Link>
  </div>
</section>
    );
};

export default SuccessPopup;