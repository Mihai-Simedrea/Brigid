using Application.Command.Commands;
using Application.Common.Models;
using Domain.Entities;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Command.Handlers
{
    public class CreatePatientHandler : IRequestHandler<CreatePatientCommand, PatientDto>
    {
        private readonly IPatientRepository _patientRepository;
        public CreatePatientHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        // Everything should be refactored using AutoMapper
        public async Task<PatientDto> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
        {
            var patient = new Patient()
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                CreatedAt = DateTime.Now,
                CreatedBy = "Mihai Simedrea"
            };

            var newPatient = await _patientRepository.AddAsync(patient, cancellationToken);
            return new PatientDto()
            {
                FirstName = newPatient.FirstName,
                LastName = newPatient.LastName
            };
        }
    }
}
