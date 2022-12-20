// Details data mask

export const settingUserDetailMask = {
  dataMask: {
    name: 'Ad',
    surname: 'Soyad',
    email: 'Elektron poçt ünvanı',
    phone: 'Əlaqə nömrəsi',
    user_type: 'Istifadəçi qrupu',
    status: 'Status',
    created_at: 'Qeydiyyat tarixi',
    updated_at: 'Məlumatlar son dəfə yenilənib',
    created_by: 'Kim tərəfindən qeydiyyata alınıb',
    address: 'Ünvan',
    birth_date: 'Doğum tarixi',
  },
  omitFields: ['photo', 'id', 'key'],
  optionFields: {
    status: {
      0: 'Deaktiv',
      1: 'Aktiv',
    },
    user_type: {
      0: 'Admin',
      1: 'Moderator',
      2: 'Usta',
      3: 'User',
      4: 'Hüquqi şəxs',
    },
  },
};
