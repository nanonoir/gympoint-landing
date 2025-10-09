import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGymForm } from '../hooks';
import { Heading, Button } from '../components/ui';
import { FormStep1 } from '../components/form';
import { FormStep2 } from '../components/form';

export const RegisterGymPage = () => {
  const navigate = useNavigate();
  const {
    formData,
    updateField,
    currentStep,
    setCurrentStep,
    isStep1Complete,
    exportJSON,
  } = useGymForm();

  const [showWarningModal, setShowWarningModal] = useState(false);

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    if (!isStep1Complete()) {
      setShowWarningModal(true);
      return;
    }

    submitData();
  };

  const submitData = async () => {
    const jsonData = exportJSON();
    
    const submitFormData = new FormData();
    submitFormData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    submitFormData.append('subject', `Nuevo Registro de Gimnasio: ${formData.name}`);
    submitFormData.append('from_name', 'GymPoint - Sistema de Registro');
    submitFormData.append('message', jsonData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitFormData,
      });

      const data = await response.json();

      if (data.success) {
        alert('¡Registro enviado exitosamente! Te contactaremos pronto.');
        navigate('/');
      } else {
        alert('Error al enviar el registro. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <Heading variant="h1" className="mb-4">
            Registrá tu Gimnasio
          </Heading>
          <p className="text-gray-600 dark:text-gray-400">
            Paso {currentStep} de {totalSteps}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex gap-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  step <= currentStep
                    ? 'bg-secondary'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Heading variant="h2" className="mb-6">
                  Información Esencial
                </Heading>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Esta información es obligatoria para crear el perfil de tu gimnasio.
                </p>
                <div className="space-y-4">
                    <FormStep1 formData={formData} updateField={updateField} />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Heading variant="h2" className="mb-6">
                  ¡La Información Clave!
                </Heading>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Esta información ayuda a los usuarios a tomar decisiones.
                </p>
                <div className="space-y-4">
                    <FormStep2 formData={formData} updateField={updateField} />
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Heading variant="h2" className="mb-6">
                  Los Detalles que Enamoran
                </Heading>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Información complementaria para destacarte.
                </p>
                <div className="space-y-4">
                  <p className="text-center text-gray-500">
                    ...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Anterior
          </Button>

          <div className="flex gap-4">
            <Button variant="secondary" onClick={handleFinish}>
              Finalizar
            </Button>

            {currentStep < totalSteps && (
              <Button variant="primary" onClick={handleNext}>
                Siguiente
              </Button>
            )}
          </div>
        </div>

        {showWarningModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md">
              <Heading variant="h3" className="mb-4">
                ¡Atención!
              </Heading>
              <p className="mb-6">
                Debes completar toda la información obligatoria del Paso 1 antes de finalizar.
              </p>
              <Button onClick={() => setShowWarningModal(false)}>
                Entendido
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};