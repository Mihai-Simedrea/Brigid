using Application.Common.Models;
using AutoMapper;
using Domain.Entities;

namespace Application.Profiles
{
    public class PatientProfile : Profile
    {
        public PatientProfile()
        {
            CreateMap<Patient, PatientDto>();
            CreateMap<Task<IReadOnlyList<Patient>>, Task<IReadOnlyList<PatientDto>>>();
        }
    }
}
