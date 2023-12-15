import { useState } from 'react';
import EditRecoverPassCodeForm from '../../components/EditRecoverPassCodeForm/EditRecoverPassCodeForm';

import RecoverPassForm from '../../components/RecoverPassForm/RecoverPassForm';

const RecoverPassPage = () => {
    const [showEditForm, setShowEditForm] = useState(false);

    return (
        <div className='intro'>
            <main className='main-layout'>
                {showEditForm ? (
                    <EditRecoverPassCodeForm />
                ) : (
                    <RecoverPassForm setShowEditForm={setShowEditForm} />
                )}
            </main>
        </div>
    );
};

export default RecoverPassPage;
