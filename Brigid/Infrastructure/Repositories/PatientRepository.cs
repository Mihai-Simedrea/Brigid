using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class PatientRepository : Repository<Patient>, IPatientRepository
    {
        public PatientRepository(PatientContext patientContext) : base(patientContext) { }
        public async Task<IEnumerable<Patient>> GetPatientById(int id)
        {
            return await _patientContext.Patients.Where(x => x.Id == id).ToListAsync();
        }
    }
}
