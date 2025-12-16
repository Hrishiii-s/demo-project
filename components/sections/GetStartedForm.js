import { useState } from 'react';

const GetStartedForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setErrors(prev => ({ ...prev, [name]: '' }));

    if (name === 'mobile') {
      setForm({ ...form, mobile: value.replace(/\D/g, '') });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Enter a valid email';

    if (!form.company.trim()) newErrors.company = 'Company is required';
    else if (form.company.trim().length < 3)
      newErrors.company = 'Enter a valid company name';

    if (!form.requirements.trim())
      newErrors.requirements = 'Please enter your requirements';
    else if (form.requirements.trim().length < 3)
      newErrors.company = 'Enter a valid requirement';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      console.log('Form Data:', form);

      // Need to write the submission logic
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={e => handleChange(e)}
            className="rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none w-full"
          />
          <span className="text-red-500 text-[13px]">{errors['name']}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={e => handleChange(e)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none"
            />
            <span className="text-red-500 text-[13px]">{errors['email']}</span>
          </div>

          <div className="w-full">
            <input
              type="text"
              placeholder="Mobile number"
              name="mobile"
              inputMode="numeric"
              value={form.mobile}
              onChange={e => handleChange(e)}
              onKeyDown={e => {
                const allowedKeys = [
                  'Backspace',
                  'Delete',
                  'ArrowLeft',
                  'ArrowRight',
                  'Tab',
                ];

                if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                  e.preventDefault();
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none"
            />
            <span className="text-red-500 text-[13px]">{errors['mobile']}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Company"
            value={form.company}
            name="company"
            onChange={e => handleChange(e)}
            className="rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none"
          />
          <span className="text-red-500 text-[13px]">{errors['company']}</span>
        </div>

        <div className="flex flex-col">
          <textarea
            placeholder="Enter your requirements"
            value={form.requirements}
            name="requirements"
            onChange={e => handleChange(e)}
            className="h-28 rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none"
          />
          <span className="text-red-500 text-[13px]">
            {errors['requirements']}
          </span>
        </div>
      </div>

      <button
        onClick={submitForm}
        className="mt-6 w-fit px-3 rounded-md bg-violet-800 py-2.5 text-white font-semibold hover:bg-violet-900 transition"
        disabled={isLoading}
      >
        Get Started
      </button>
    </>
  );
};

export default GetStartedForm;
