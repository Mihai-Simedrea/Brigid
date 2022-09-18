using Application.Common.Models;
using Application.Query.Queries;
using AutoMapper;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Query.Handlers
{
    public class GetAllPatientsQueryHandler : IRequestHandler<GetAllPatientsQuery, IReadOnlyList<PatientDto>>
    {
        public IPatientRepository _patientRepository;
        public IMapper _mapper;

        public GetAllPatientsQueryHandler(IPatientRepository patientRepository, IMapper mapper)
        {
            _patientRepository = patientRepository;
            _mapper = mapper;
        }

        public async Task<IReadOnlyList<PatientDto>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
        {
            var query = await _patientRepository.GetAllAsync(cancellationToken);
            return _mapper.Map<IReadOnlyList<PatientDto>>(query);

        }
    }
}
