import { useState } from 'react';
import validator from 'validator';
import { Input } from '../ui/Input';
import type { GymFormData } from '../../types/gym.types';

interface FormStep1Props {
  formData: GymFormData;
  updateField: (path: string, value: any) => void;
}

export const FormStep1: React.FC<FormStep1Props> = ({ formData, updateField }) => {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateField('contact.email', value);
    
    if (value && !validator.isEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Email inválido' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateField('contact.phone', value);
    
    const phoneRegex = /^(\+54)?[\s]?[\d\s]{8,15}$/;
    if (value && !phoneRegex.test(value)) {
      setErrors(prev => ({ ...prev, phone: 'Formato: +54 362 4999999 o 362 4999999' }));
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <Input
        label="¿Cómo se llama el gimnasio? *"
        type="text"
        value={formData.name}
        onChange={(e) => updateField('name', e.target.value)}
        placeholder="Ej: FitCenter Norte"
        helperText="Nombre oficial del gimnasio"
        required
      />

      <Input
        label="¿Dónde se encuentra? *"
        type="text"
        value={formData.location.address}
        onChange={(e) => updateField('location.address', e.target.value)}
        placeholder="Av. 9 de Julio 5678, Resistencia, Chaco"
        helperText="Dirección completa del gimnasio"
        required
      />

      <Input
        label="Ciudad *"
        type="text"
        value={formData.location.city}
        onChange={(e) => updateField('location.city', e.target.value)}
        placeholder="Ej: Resistencia"
        helperText="Ciudad donde se encuentra el gimnasio"
        required
      />

      <Input
        label="Correo electrónico de contacto *"
        type="email"
        value={formData.contact.email}
        onChange={handleEmailChange}
        placeholder="info@gimnasio.com"
        error={errors.email}
        helperText={errors.email ? '' : 'Email principal de contacto'}
        required
      />

      <Input
        label="Teléfono / Celular de contacto *"
        type="tel"
        value={formData.contact.phone}
        onChange={handlePhoneChange}
        placeholder="+54 362 4999999"
        error={errors.phone}
        helperText={errors.phone ? '' : 'Número de contacto del gimnasio'}
        required
      />

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Nota:</strong> Los campos marcados con <span className="text-red-500">*</span> son obligatorios para continuar.
        </p>
      </div>
    </div>
  );
};